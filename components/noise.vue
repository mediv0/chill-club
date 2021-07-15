<template>
    <div class="noise"></div>
</template>

<style lang="scss" scoped>
@keyframes noise {
    to {
        background-position-y: 100%;
    }
}
.noise {
    pointer-events: none;
    position: absolute;
    inset: 0;
    background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/2wBDAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wAARCAAWACADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMHAQb/xAAzEAAAAwUCCQ0AAAAAAAAAAAAAAQIDBAUGVBEhEhMUF0KRlKLSFjIzQURRUlZydJLR4v/EABgBAAIDAAAAAAAAAAAAAAAAAAEGAAQF/8QAJhEAAAQDBwUAAAAAAAAAAAAAAAECBRZUoQMEERMkVpMVIVWRkv/aAAwDAQACEQMRAD8AgrZxgJtWpm+L6RWkV1/pCTcIDbYT4s7+8voUc47KBNV4cqLtwldkQG8pJL8m3e1SLsVXLa9lymFzNc8T0Dp8pEzyKA1TTWXCNyKAVi/l+RQFxuVdGUV7IgPTMUqdcoHsSBItuW1rLlMDMdvHOnpI5ZtPsRxzQidHfnK8QUU+ROlYa1gAMPpDdLJqH6IHntrV0BnBilK77wXnBiVKw3+IAACaW6WSDEDzOroP/9k=);
    background-size: 7px auto;
    opacity: 0.04;
    -webkit-animation: noise 15s linear infinite;
    animation: noise 15s linear infinite;
    z-index: -1;
}
</style>
