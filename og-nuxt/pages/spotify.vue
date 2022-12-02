<template>
    <div>
        <SectionsSporifyLogin/>
    </div>
</template>

<script setup>
useHead({
    title: "hey hey",
    link: [{
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon_g.svg'}],
    meta:[
        {
            name: "robots",
            content: "index, follow"
        },
        {
            name: "description",
            content: "Yap description"
        },
        {
            property: "site_name",
            content: "Your site name"
        },
        {
            property: "og:title",
            content: "Site title"
        },
        {
            property: "og:description",
            content: "Your site description"
        },
        {
            property: "og:image",
            content: "https://example.com/image.png"
        },
        {
            property: "og:url",
            content: "https://example.com/"
        },
        {
            name: "twitter:card",
            content: "https://example.com/"
        },
        {
            name: "twitter:title",
            content: "https://example.com/"
        },
        {
            name: "twitter:description",
            content: "Your site description"
        },
        {
            name: "twitter:image",
            content: "https://example.com/image.png"
        }
    ]
})

onMounted(()=>{
    
})
</script>
