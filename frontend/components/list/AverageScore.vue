<template>
        <div class="flex-1 hidden md:flex flex-col items-center">
            <span class="text-paragraph text-xl font-serif tracking-wider mb-4 font-semibold">Średnia ocen</span>
            <div class="text-secondary-400">
                <span class="text-7xl">5</span>
                <span class="text-5xl">/5</span>
            </div>
            <div class="flex flex-row mt-4 gap-2">
                <img width="17px" src="/icons/star.svg" v-for="n in 5"></img>
            </div>
        </div>
</template>