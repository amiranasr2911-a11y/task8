var imageElement = document.getElementById("image");

var rowdataElement = document.getElementById("rowdata");



var recipes = [
  {
    image:"img/photo-1467003909585-2f8a72700288.avif",
    padge1:"4.7(389 reviews)",
    padge2:{
      time:"20 min",
      cook:"30 min",
      pople:"4 people",
    },
    title:"Chicken Tikka Masala",
    description:"Rich and creamy Indian curry with tender chicken pieces",
    tag:{
      difficulty:"Intermediate",
      cuisine: "Asian",
    },
    ingredients:[
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
     instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
     ],
     nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sugar: "760mg"
    },
     chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
     ],


  }

]


function changeRecipe() {
 for (var i = 0; i < recipes.length; i++) {
  imageElement.innerHTML =
  `<div class="col-12 col-lg-12 col-md-12 w-100 p-md-0">
        <div class="inner position-relative ">
           <img src="${recipes[i].image}""  
           class=" image  " alt="">

      <div class="padge position-absolute  rounded-pill p-2 bg-white text-dark">
        <i class="fa-solid fa-star text-warning"></i>${recipes[i].padge1}
      </div>

      <div class="padge2 position-absolute bg-white text-dark d-flex justify-content-between align-items-center rounded-3 p-3 w-75 ">
<div class=" text-center">
  <i class="fa-solid fa-clock fa-xl"></i>
  <p class="text">Prep Time</p>
  <h5 class="h5">${recipes[i].padge2.time}</h5>
</div>
<div class=" text-center">
<i class="fa-solid fa-fire-burner fa-xl"></i>
  <p class="text">Cook Time</p>
  <h5 class="h5">${recipes[i].padge2.cook}</h5>
</div>
<div class=" text-center">
<i class="fa-solid fa-users fa-xl"></i>
  <p class="text">Servings</p>
  <h5 class="h5">${recipes[i].padge2.pople}</h5>
</div>
      </div>

        </div>
      </div> ;`
      rowdataElement.innerHTML = `
      
      <div class="col">
        <div class="inner">
           <div class="col-12  col-lg-12  col-md-12">
  <div class="inner p-3">
    <div class="d-flex">
    <span class="easy rounded-pill p-1 me-3 ">${recipes[i].tag.difficulty}</span>
  <span class="asian rounded-pill p-1  me-3">${recipes[i].tag.cuisine}</span>
  </div>
  <div class="d-flex align-items-center justify-content-between">
    <div class="caption">
      <h1 class="h">${recipes[i]. title}</h1>
      <p class="p" >${recipes[i].description}</p>
    </div>
    <div class="d-flex ">
      <span><i class="fa-solid fa-bookmark bookmark"></i></span>
      <span><i class="fa-solid fa-share-nodes nodes"></i></span>
    </div>


  </div>
<div class="p-2 ">
  <ul class="nav nav-pills mb-3 d-flex w-100 justify-content-center text-center p-0" id="pills-tab" role="tablist">
  <li class="nav-item flex-fill " role="presentation">
    <button class="nav-link active p-1" id="ingredients-tab" data-bs-toggle="pill" data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients" aria-selected="true">
      <i class="fa-solid fa-list-check"></i> Ingredients
    </button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link p-1" id="instructions-tab" data-bs-toggle="pill" data-bs-target="#instructions" type="button" role="tab" aria-controls="instructions" aria-selected="false">
      <i class="fa-solid fa-book-open"></i> Instructions
    </button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link p-1" id="nutrition-tab" data-bs-toggle="pill" data-bs-target="#nutrition" type="button" role="tab" aria-controls="nutrition" aria-selected="false">
      <i class="fa-solid fa-chart-pie"></i> Nutrition
    </button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link p-1" id="chef-tab" data-bs-toggle="pill" data-bs-target="#chef" type="button" role="tab" aria-controls="chef" aria-selected="false">
      <i class="fa-solid fa-lightbulb"></i> Chef's Tips
    </button>
  </li>
</ul>
</div>



<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="ingredients" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
    <div class=" ingredients maincolor  rounded-2 mb-3 ">
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p> 
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
 <p><span class="number">${i + 1}</span>${recipes[0].ingredients[i]}</p>
<p><span class="number">${i + 1}/span>${recipes[0].ingredients[i]}/p>
</div>
</div>
  <div class="tab-pane fade" id="instructions" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
    <div class="instuction">
  <p><span class="number2">${i + 1}</span> ${recipes[0].instructions[i]}.</p>
  <p><span class="number2">${i + 1}</span>${recipes[0].instructions[i]}.</p>
  <p><span class="number2">${i + 1}</span> ${recipes[0].instructions[i]}.</p>
  <p><span class="number2">${i + 1}</span> ${recipes[0].instructions[i]}.</p>
  <p><span class="number2">${i + 1}</span> ${recipes[0].instructions[i]}</p>
  <p><span class="number2">${i + 1}</span> ${recipes[0].instructions[i]}.</p>
</div>

</div>
  <div class="tab-pane fade" id="nutrition" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div class="nutrition">
    <div class="row justify-content-center gap-2">
     <div class="d-flex gap-2">
       <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-fire fire"></i></span> Calories</p>
        <h4 class="h4">${recipes[i].nutrition.calories}</h4>
      </div>
      <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-dumbbell dumbbell"></i></span> Protein</p>
        <h4 class="h4">${recipes[i].nutrition.protein}</h4>
      </div>
     </div>
      <div class="d-flex gap-2">
        <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-wheat-awn wheat"></i></span> Carbohydrates</p>
        <h4 class="h4">${recipes[i].nutrition.carbs}</h4>
      </div>
      <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-droplet blood"></i></span> Fat</p>
        <h4 class="h4">${recipes[i].nutrition.fat}</h4>
      </div>
      </div>
      <div class="d-flex gap-2">
        <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-seedling plant"></i></span> Fiber</p>
        <h4 class="h4">${recipes[i].nutrition.fiber}</h4>
      </div>
      <div class="col-6 d-flex justify-content-between align-items-center cal rounded-2 p-2 mb-3">
        <p class="p"><span><i class="fa-solid fa-cube cube"></i></span> Sugar</p>
        <h4 class="h4">${recipes[i].nutrition.sugar}</h4>
      </div>
      </div>
    </div>
  </div>
</div>


  <div class="tab-pane fade" id="chef" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
    <div class="Chef1">
  <div class="chef-tips mb-3">
    <p class="chefp"> <i class="fa-solid fa-check check"></i> ${recipes[0].chefTips[i]}</p>
  </div>
  <div class="chef-tips mb-3">
    <p class="chefp"> <i class="fa-solid fa-check check"></i> ${recipes[0].chefTips[i]}</p>
  </div>
  <div class="chef-tips mb-3">
    <p class="chefp"> <i class="fa-solid fa-check check"></i>${recipes[0].chefTips[i]}</p>
  </div>
  <div class="chef-tips mb-3">
    <p class="chefp"> <i class="fa-solid fa-check check"></i>${recipes[0].chefTips[i]}</p>
  </div>
</div> </div>
</div>
  </div>
   <button class=" ms-5 rounded-2 try" onclick=" changeRecipe()"><i class="fa-solid fa-arrows-rotate"></i> Try Another Recipe</button>
</div>
        </div>
      </div> `;
      imageElement.innerHTML = imageHTML;
    rowdataElement.innerHTML = rowHTML;
  }
}