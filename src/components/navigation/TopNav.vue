<template>

    <div>
        <div class="header-mobile-wrapper">
            <a href="">
                <div class="logo"></div>
            </a>
            <div id="burger-button" class="header-mobile-burger">
                <div class="burger-part"></div>
                <div class="burger-part"></div>
                <div class="burger-part"></div>
            </div>
        </div>
        <div id="burger-menu" class="burgermenu-wrapper">
            <div id="burger-close" class="burgermenu-close-btn"></div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/troubleshoot/issue-1">Issue1</router-link>
                    </li>
                    <li><a href="">Forum</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
                <div class="header-nav__signin">
                    <ul>
                        <li>
                            <router-link to="/SignIn">Login</router-link>
                        </li>

                        <li>
                            <a href="">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- DESKTOP MENU -->
        <div class="header-desk-wrapper">
            <a href="">
                <img class="header-desk__logo" src="@/assets/icons/logo-light.svg" href="logo">
            </a>
            <nav class="header-desk-nav">
                <ul>
                    <li><router-link to="/troubleshoot">Troubleshoot</router-link></li>
                    <li><router-link to="/forum" href="">Forum</router-link></li>
                    <div class="header-desk-nav__horisontal-breaker"></div>

                    <li v-if="!auth"><router-link to="/SignIn">Sign in</router-link></li>
                    <li v-else class="text-white">{{ email }} | <button @click="signOut">Log out</button></li>

                </ul>
            </nav>
        </div>
        <div class="breadcrumb">
            <a href=""></a>
            <p></p>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default ({
        data() {
            return {
                auth: false,
                email: ""
            }
        },
        created() {
            if (localStorage.getItem("commentToken") && localStorage.getItem("commentEmail") && localStorage.getItem("commentUserId")) {
                    this.auth = true;
                    this.email = localStorage.getItem("commentEmail");
                }
        },
        methods: {
            signOut() {
                firebase.auth().signOut().then(() => {
                    localStorage.removeItem('commentUserId')
                    localStorage.removeItem('commentToken')
                    localStorage.removeItem('commentExpirationDate')
                    localStorage.removeItem('commentUserName')
                    localStorage.removeItem('commentAdmin')
                    localStorage.removeItem('commentEmail')

                    this.$router.push('/troubleshoot')
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
        mounted() {
            $("#burger-button").click(function () {
                $("#burger-menu").toggleClass("burger-menu--show");
            });

            $("#burger-close").click(function () {
                $("#burger-menu").toggleClass("burger-menu--show");
            });
        }
    })
</script>

<style scoped>
    @media only screen and (max-width: 600px) {

        .header-mobile-wrapper {
            width: 100vw;
            height: 5rem;
            background-color: var(--primary-color);
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
        }

        .logo {
            width: 3rem;
            height: 3rem;
            background-color: var(--blue-color);
            margin: 1rem;
        }

        .header-mobile-burger {
            width: 3rem;
            height: 3rem;
            margin: 1rem;
        }

        .burger-part {
            width: 2.5rem;
            height: 0.2rem;
            margin: 0.64rem;
            background-color: var(--third-color);
        }

        .burgermenu-wrapper {
            width: 100vw;
            height: 100vh;
            background-color: var(--primary-color);
            position: fixed;
            left: 100vw;
            padding-top: 15rem;
            display: flex;
            flex-direction: column;
            align-self: center;
        }

        .burgermenu-wrapper nav {
            display: flex;
            flex-direction: column;
            margin-right: 2rem;
        }

        .burgermenu-wrapper nav ul {
            text-align: center;
        }

        .burgermenu-wrapper nav ul li {
            margin: 1rem 0 1rem 0;
        }

        .burgermenu-wrapper nav ul li a {
            color: var(--blue-color);
            font-size: 1.2em;
        }

        .header-nav__signin {
            text-align: center;
            margin-top: 4rem;
        }

        .header-nav__signin ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

        .header-nav__signin ul li {
            padding: 1rem;
        }

        a {
            text-decoration: none;
            list-style: none;
        }

        .burger-menu--show {
            left: 0vw;
            top: 0;
            transition: 0.5s;
        }

        .burgermenu-close-btn {
            display: flex;
            position: absolute;
            width: 3rem;
            height: 3rem;
            right: 1rem;
            top: 1rem;
        }

        .burgermenu-close-btn::before {
            content: '';
            position: absolute;
            top: 1.3rem;
            height: 0.2rem;
            width: 3rem;
            background-color: var(--third-color);
            transform: rotate(45deg);
            border-radius: 0.5rem;
        }

        .burgermenu-close-btn::after {
            content: '';
            position: absolute;
            top: 1.3rem;
            height: 0.2rem;
            width: 3rem;
            background-color: var(--third-color);
            transform: rotate(-45deg);
            border-radius: 0.5rem;
        }

        .header-desk-wrapper {
            display: none;
        }

        .breadcrumb {
            position: fixed;
            display: flex;
            top: 5rem;
            background-color: var(--blue-color);
            height: 2rem;
            width: 100%;
            color: var(--secondary-color);
            padding-top: 0.3rem;
            padding-left: 1.5rem;
        }

    }

    @media only screen and (min-width: 1000px) {

        .burgermenu-wrapper {
            display: none;
        }

        .header-desk-wrapper {
            display: flex;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 5rem;
            background-color: var(--color-light-black);
            justify-content: space-between;
            align-items: center;
        }

        .header-desk__logo {
            height: 3.5rem;
            margin-left: 14vw;
        }

        .header-desk-nav {
            display: flex;
            flex-direction: row;
            margin-right: 14vw;
            align-items: center;
        }

        .header-desk-nav ul {
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
        }

        .header-desk-nav ul li {
            margin: 0 1rem 0 1rem;
        }

        .header-desk-nav ul li a {
            text-decoration: none;
            color: var(--color-white);
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
        }

        .header-desk-nav__signin-icon-border {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: solid 0.2rem var(--color-brand);
            margin-right: 0.5rem;
        }

        .header-desk-nav__horisontal-breaker {
            width: .1rem;
            height: 2rem;
            background-color: var(--color-white);
        }


        .breadcrumb {
            position: fixed;
            display: flex;
            top: 5rem;
            background-color: var(--color-brand);
            height: 2rem;
            padding-left: 14vw;
            padding-top: 0.3rem;
            width: 100%;
            color: var(--color-white);
        }


    }
</style>