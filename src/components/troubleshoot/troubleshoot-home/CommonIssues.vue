<template>
    <main style="width: 65%; margin:auto;">
      <div class="flex flex-col my-24" data-controller="slider">
        <h1 class="text-3xl text-gray-900 mb-3 text-left">Common Issues</h1>
        <div class="flex overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery" data-slider-target="scrollContainer">
          <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="1">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
            <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="2">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
            <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="3">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
          <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="4">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
                    <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="5">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
                    <div class="w-80 h-80 px-8 flex-shrink-0 gallery-item " data-slider-target="image" id="6">
            <img class="rounded-t-md" src="https://www.simplify3d.com/wp-content/uploads/2019/04/holes-or-gaps-in-top-layers-1024x1024-1-1024x1024.jpg" />
            <div class="container rounded-b-md">Open issue</div>
          </div>
        </div>
      </div>
    </main>
</template>


<style scoped>
    h1{
        color:#50b596;
    }
          .gallery-item {
        scroll-snap-align: start;
        margin-bottom: 0.5em;
    }
      .gallery {
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
    }
    .container
    {
        font-weight: bold;
        padding: 1em;
        color: white;
        background-color:#50b596; 
    }
    .container:hover{
        background-color: #e2e2e2;
        color:rgb(53, 53, 53);
        transition: 0.5s;
        cursor: pointer;
    }
    @media screen and (max-width: 600px){
        h1{
            font-size: 20px;
            margin-bottom: 0;
        }
        .gallery-item{
            width: 50%;
            height: 50%;
            font-size: 12px;
            padding: 10px;
        }
    }

</style>