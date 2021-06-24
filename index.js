const choise = document.getElementById("range");
const pageviews = document.getElementById("pageviews")
const price = document.getElementById("price")
const isYear = document.getElementById("switch")
const priceArray = [8.00, 12.00, 16.00, 24.00, 36.00];
let discountPrice = [...priceArray];


isYear.oninput = function() {
    if (!isYear.checked) {
        discountPrice = [...priceArray];
        price.innerHTML = "$"+ discountPrice[choise.value-1] +".00"
    } else {
        discountPrice= [];
        priceArray.forEach((item)=> {
            discountPrice.push(item*0.75);
            price.innerHTML = "$"+ discountPrice[choise.value-1] +".00"
        })
    }
}


choise.oninput = function() {
    let valuePercent = (this.value-this.min)/(this.max-this.min)*100;
    let value = this.value;
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + valuePercent + '%, hsl(224, 65%, 95%) ' + valuePercent + '%, hsl(224, 65%, 95%) 100%)';
    
   
    switch (Number(value)) {
        case 1:
            pageviews.innerHTML = "10K PAGEVIEWS";
            price.innerHTML = "$"+ discountPrice[0] +".00"
            break;
        case 2:
            pageviews.innerHTML = "50K PAGEVIEWS";
            price.innerHTML = "$"+ discountPrice[1] +".00"
            break;
        case 3:
            pageviews.innerHTML = "100K PAGEVIEWS";
            price.innerHTML = "$"+ discountPrice[2] +".00"
            break;
        case 4:
            pageviews.innerHTML = "500K PAGEVIEWS";
            price.innerHTML = "$"+ discountPrice[3] +".00"
            break;
        case 5:
            pageviews.innerHTML = "1M PAGEVIEWS";
            price.innerHTML = "$"+ discountPrice[4] +".00"
        }
    
    

  };


//   <!-- - 10K pageviews / $8 per month
//   - 50K pageviews / $12 per month
//   - 100K pageviews / $16 per month
//   - 500k pageviews / $24 per month
//   - 1M pageviews / $36 per month
  
//   If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices. -->
    