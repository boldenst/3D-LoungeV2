<template>
    <div class="explanations-wrapper">
        <div class="explanations__problem-container">
            <div class="explanations__caption-layout">
                <div class="explanations__question-icon">
                    <p class="explanations__question-icon">
                        ?
                    </p>
                </div>
                <h2>What is it?</h2>
            </div>
            <p class="main-text explanation-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo minima
                totam culpa amet cum sint consequuntur repellendus modi sed? 
                <br> <br>
                Dolore recusandae incidunt pariatur nisi
                perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
                hic qui libero, et provident veniam dicta dolor.
            </p>
        </div>
        <div class="explanations__problem-container">
            <div class="explanations__caption-layout">
                <div class="explanations__question-icon">
                    <p class="explanations__question-icon">
                        ?
                    </p>
                </div>
                <h2>How to spot layer adhesion issues?</h2>
            </div>
            <p class="explanation-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo minima
                totam culpa amet cum sint consequuntur repellendus modi sed? 
                <br> <br>
                Dolore recusandae incidunt pariatur nisi
                perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
                hic qui libero, et provident veniam dicta dolor.
            </p>
        </div>
    </div>
</template>

<style scoped>
    .explanations-wrapper {
        background-color: white;
        margin: 1rem 0.5rem 1rem 0.5rem;
        padding: 1.5rem 0.7rem;
        border-radius: 0.5rem;
    }

    .explanations__problem-container {
        display: flex;
        flex-direction: column;
    }

    .explanations__caption-layout {
        display: flex;
        align-items: center;
    }

    h2 {
        font-size: 1.4rem;
        color: var(--blue-text-color);
        font-weight: bold;
        margin-left: 1rem;
    }

    .explanation-text {
        font-size: 1rem;
        margin: 1rem 0;
        text-align: left;
    }

    .explanations__question-icon {
        background-color: var(--blue-color);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
    }
</style>