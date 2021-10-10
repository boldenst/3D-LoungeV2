<template>
  <div>
    <UserInfo></UserInfo>
    <TabsForum>
      <TabForum class="" name="Trending" selected="true">
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/forumpost1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">How do i change my nozzle</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Oliver</strong>
                            </p>
                            <p class="forum-topic__responses">5 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">97 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post2">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">How to fix spaghetti in my 3D Printer</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Alan</strong>
                            </p>
                            <p class="forum-topic__responses">7 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">55 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>        
                <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post3">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">How do i clean my print bed?</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Martin</strong>
                            </p>
                            <p class="forum-topic__responses">2 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">21 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
                <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">Which 3D printer should i get?</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Tony</strong>
                            </p>
                            <p class="forum-topic__responses">17 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">47 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">How to level the bed</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Søren</strong>
                            </p>
                            <p class="forum-topic__responses">10 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">7 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">PETG vs PLA vs ASA</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Alex</strong>
                            </p>
                            <p class="forum-topic__responses">0 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">2 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>        
      </TabForum>
      <TabForum class="" name="Recent">
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">PETG vs PLA vs ASA</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Alex</strong>
                            </p>
                            <p class="forum-topic__responses">0 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">2 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
      </TabForum>
      <TabForum class="" name="Most responses">
                <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">Which 3D printer should i get?</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Tony</strong>
                            </p>
                            <p class="forum-topic__responses">17 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">47 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>

                <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">How to level the bed</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Søren</strong>
                            </p>
                            <p class="forum-topic__responses">10 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">7 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>

      </TabForum>
      <TabForum class="" name="Unanswered">
        <ForumTopic>
          <template v-slot:forum-router-link>
            <router-link to="/forum/post1">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">PETG vs PLA vs ASA</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">Alex</strong>
                            </p>
                            <p class="forum-topic__responses">0 <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">2 <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
          </template>
        </ForumTopic>
      </TabForum>
      <TabForum class="" name="Other">

      </TabForum>
    
    </TabsForum>
  

  </div>

</template>

<style >

  .tabs-forum {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "head head head head head head head head head head"
      "nav nav nav nav nav nav nav nav nav nav"
      "info info info info info info info info info info"
    ;
    margin: 0 14vw 5rem 14vw;
  }

  .tabs-section__heading-forum {
    display: none;
  }

  .tabs-ul-forum {
    display: flex;
    width: 100%;
  }


  .tabs-li-forum {
    display: flex;
    align-items: center;
    color: white;
    height: 3rem;
    width: 100%;
    background-color: var(--color-light-black);
    position: relative;
    cursor: pointer;
    text-align: center;
  }

  .tabs-name-forum {
    height: 3rem;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    transition: all .2s ease-in-out;
  }

  .btn-tab__brandline-forum {
    display: none;
    position: absolute;
    width: 100%;
    height: .2rem;
    background-color: var(--color-brand);
    bottom: 0;
    right: 0;
    z-index: 1;
  }
</style>

<script>
  import UserInfo from '@/components/forum-home/UserInfo.vue'
  import TabForum from '@/components/forum-home/TabForum.vue'
  import TabsForum from '@/components/forum-home/TabsForum.vue'
  import ForumTopic from '@/components/forum-home/ForumTopic.vue'


  export default {
    name: 'SignIn',
    components: {
      UserInfo,
      TabForum,
      TabsForum,
      ForumTopic
    }

  }
</script>