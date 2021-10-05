<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
        <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
        </h2>
        </div>
        <form class="mt-8 space-y-6" v-on:submit.prevent="createNewAccount">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md space-y-5">
            <div>
                <label for="firstname" class="sr-only">First name</label>
                <input v-model="firstName" id="firstname" name="firstname" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main-green-500 focus:border-main-green-500 focus:z-10 sm:text-sm" placeholder="Your first name">
            </div>
            <div>
                <label for="lastname" class="sr-only">Last name</label>
                <input v-model="lastName" id="lastname" name="lastname" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main-green-500 focus:border-main-green-500 focus:z-10 sm:text-sm" placeholder="Your last name">
            </div>
            <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main-green-500 focus:border-main-green-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input v-model="password" id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main-green-500 focus:border-main-green-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
            <div>
                <label for="password_confirm" class="sr-only">Password</label>
                <input v-model="password_confirm" id="password_confirm" name="password_confirm" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main-green-500 focus:border-main-green-500 focus:z-10 sm:text-sm" placeholder="Password Again">
            </div>
        </div>

        <div>
            <button type="submit" name="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main-green-600 hover:bg-main-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg class="h-5 w-5 text-main-green-500 group-hover:text-main-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
            </span>
                Sign up
            </button>
        </div>
        </form>
    </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            firstName: "",
            lastName: "",  
            email: "",
            password: "",
            password_confirm: ""
        }
    },
    methods: {
        createNewAccount() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        }
    }
}
</script>