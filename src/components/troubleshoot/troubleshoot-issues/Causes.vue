<template>
    <section>
        <div class="p-4">
            <h2 class="font-semibold mt-2 mb-2 lg:text-left">Possible causes</h2>
            <slot name="causes">
                <p class="causes font-semibold text-left">- Temperature too low on hot end</p>
                <p class="causes font-semibold text-left">- Wrong profile on slicer</p>
            </slot>
        </div>
        <div class="p-4">
            <h2 class="font-semibold mb-2 lg:text-left">Possible solutions</h2>
            <slot name="solutions">
                <p class="solution font-semibold text-left">- Temperature too low on hot end <a
                        class="underline cursor-pointer" href="">Learn how...</a></p>
                <p class="solution font-semibold text-left">- Wrong profile on slicer <a
                        class="underline cursor-pointer" href="">Learn how...</a></p>
            </slot>
        </div>

    </section>
</template>

<style scoped>
    h2 {
        margin-bottom: 0.2em;
    }

    .solution {
        text-align: left;
        color: #0B7400;
    }

    .causes {
        color: #A70707;
    }

    a {
        color: grey;
    }

    @media screen and (min-width: 600px) {
        section {
            display: flex;
            margin: auto;
            justify-content: center;
            align-items: center;
        }
    }
</style>