<template>
  <div class="space-y-10 max-w-xl mx-auto">
    <div>
      <div class="flex justify-center space-x-8 items-center">
        <img
          src="../../../assets/profile-pic.png"
          alt=""
          class="h-12 w-12 rounded-full"
        />
        <textarea
          v-model="form.text"
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          placeholder="Write your comment"
          class="px-4 py-2 bg-gray-100 w-full max-w-md rounded focus:outline-none"
        ></textarea>
        <button
          @click="addComment"
          class="px-4 py-4 bg-green-400 text-white hover:bg-green-800 rounded transition duration-300"
        >
        

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
    <div class="space-y-5">
      <div
        class="bg-gray-100 mx-auto p-5 rounded"
        v-for="comment in comments"
        :key="comment.id"
      >
        <!-- Header of comment -->
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-5">
            <img
              src="../../../assets/profile-pic.png"
              alt=""
              class="h-12 w-12 rounded-full"
            />
            <p class="font-bold">{{ comment.name }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <p>{{ comment.likes }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-400 hover:fill-current cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            
          </div>
        </div>
        <!-- End -->
        <div class="text-left mt-5">
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      form: {
        text: "",
        name: "Martin Windsor",
      },
      comments: [
        {
          id: 1,
          name: "Martin Windsor",
          text: "Bla bla bla",
          likes: 3,
        },
      ],
    };
  },

  methods: {
    addComment() {
      this.comments.push({
        id: 2,
        name: this.form.name,
        text: this.form.text,
        likes: 0,
      });

      this.form.text = "";
    },
  },
};
</script>
