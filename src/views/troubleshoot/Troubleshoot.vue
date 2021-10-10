<template>
  <div id="issue1">
    <Description> </Description>
    <Tabs>
      <Tab class="sub-grid issue-1__container grid-area-tab" name="Layer Adhesion" selected="true">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Layer Adhesion Issues</h2>
          <p class="issue__text">
            Layer adhesion issues can have many causes and can ruin a perfectly fine print. And there are way sto
            prevent this from happening to your print, to increase both the strength and the qulity of your prints.
            <br> <br>
            See the full guide to find out how to prevent it, and why it might be happening in the first place.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/layeradhesion" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image issue__image-1"></div>
      </Tab>
      <Tab class="sub-grid" name="Pillowing">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Pillowing Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/pillowing" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Bed Adhesion">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Bed Adhesion Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/bed-adhesion" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Warping">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Warping Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/warping" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Extrusion Inconsistency">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Extrusion Inconsistency Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/extrusionincosistency" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Ringing">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Ringing Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/ringing" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Stringing">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Stringing Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/stringing" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="Bridging">
        <div class="issue__info-contains">
          <h2 class="issue__heading">Bridging Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <router-link to="/troubleshoot/bridging" class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </router-link>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
      <Tab class="sub-grid" name="More">
        <div class="issue__info-contains">
          <h2 class="issue__heading">More Issues</h2>
          <p class="issue__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum
            temporibus
            voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus
            minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe
            veniam
            eveniet cumque, fugit unde eaque! Doloribus.
          </p>
        </div>
        <div class="issue-btn__container">
          <button class="btn__rating">
            <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
            <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
            <p class="btn__rating-txt">420</p>
          </button>
          <div class="issue-btn__left">
            <button class="btn__sugg-edit">
              <p class="btn__sugg-edit-txt">Suggest edit</p>
              <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
            </button>
            <button class="btn__full-guide">
              <p class="btn__full-guide-txt">Full Guide</p>
            </button>
          </div>
        </div>
        <div class="issue__image"></div>
      </Tab>
    </Tabs>

  </div>
</template>

<script>
  // @ is an alias to /src
  import Description from '@/components/troubleshoot/troubleshoot-home/Description.vue'
  import FilterSearch from '@/components/troubleshoot/troubleshoot-home/FilterSearch.vue'
  import Tab from '@/components/troubleshoot/troubleshoot-home/Tab.vue'
  import Tabs from '@/components/troubleshoot/troubleshoot-home/Tabs.vue'
  import Footer from '@/components/navigation/Footer.vue'



  export default {
    name: 'Troubleshoot',
    components: {
      Description,
      FilterSearch,
      Tab,
      Tabs,
      Footer
    }
  }
</script>



<!-- https://www.youtube.com/watch?v=LBwraONGb9E -->