<template>
    <section>
        <div>
            <h2>Possible causes</h2>
            <p class="causes">- temprature too low on hot end</p>
            <p class="causes">- wring profile on slicer</p>
        </div>
        <div>
            <h2>Possible solutions</h2>
            <p class="solution">- temprature too low on hot end <a href="">Learn how...</a></p> 
            <p class="solution">- wring profile on slicer <a href="">Learn how...</a></p> 
        </div>

    </section>
</template>

<style scoped>
    section{
        display:column;
    }
    div{
        padding: 1em;
    }
    h2{
        margin-bottom: 0.2em;
    }
    .solution {
        text-align: left;
        color: green;
    }
    .causes {
        color: red;
        text-align: left;
    }
    a{
        text-decoration: underline;
        color: grey;
        font-weight: 10px;
    }
    a:hover{
        cursor: pointer;
    }

    @media screen and (min-width: 600px){
        section{
            display: flex;
            margin: auto;
            justify-content: center;
            align-items: center;
        }
    }
</style>