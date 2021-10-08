<template>
    <div class="explanations-wrapper">
        <div class="explanations__problem-container">
            <div class="explanations__caption-layout">
                <slot name="explanation-heading">

                    <div class="explanations__question-icon">
                        <p class="explanations__question-icon">
                            ?
                        </p>
                    </div>
                    <h2 class="explanations__caption-layout-heading">What is it?</h2>
                </slot>

            </div>
            <p class="main-text explanation-text">
                <slot>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo
                    minima
                    totam culpa amet cum sint consequuntur repellendus modi sed?
                    <br> <br>
                    Dolore recusandae incidunt pariatur nisi
                    perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque
                    suscipit,
                    hic qui libero, et provident veniam dicta dolor.
                </slot>
            </p>
        </div>
    </div>
</template>

<style scoped>



</style>