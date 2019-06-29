// next.config.js https://zeit.co/blog/next3-preview
exports.exportPathMap = () => ({
    "/": { page: "/" },

    "/content/1": { page: "/content", query: { msgId: "1" } },
    "/content/2": { page: "/content", query: { msgId: "2" } },
    "/content/3": { page: "/content", query: { msgId: "3" } },
    "/content/4": { page: "/content", query: { msgId: "4" } },
    "/content/5": { page: "/content", query: { msgId: "5" } },

    "/health": { page: "/health" },

    "/travel": { page: "/travel" },

    "/movie": { page: "/movie" },

    "/contact": { page: "/contact" }
    })

