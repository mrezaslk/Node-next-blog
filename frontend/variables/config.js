const siteConfig = {
    languages: ["en", "fa"],
    // languages: ["fa"],

    defaultLng: 'en',
    dontShowUrlForDefaultLng: false,
    forceUrl: true,


    showCart: true,
    showProfile: true,
    showLanguage: true,
    showDeliveryCalcText: false,


    // rootDomain: 'http://sivan.yonnect.ir',
    // domain: 'http://sivan.yonnect.ir/sivan/',
    // assetsDomain: 'http://sivancdn.yonnect.ir/assets/',
    // socketDomain: "http://sivan.yonnect.ir/",

    rootDomain: 'http://metatrine.com',
    domain: 'http://metatrine.com/metatrine/',
    assetsDomain: 'http://cdn.metatrine.com/assets/',
    socketDomain: "http://metatrine.com/",



    // rootDomain: 'http://192.168.90.20/',
    // domain: 'http://192.168.90.20/iot/',
    // assetsDomain: 'http://192.168.90.20/assets/',
    // socketDomain: "http://192.168.90.20/",

    // rootDomain: 'http://localhost/',
    // domain: 'http://localhost/iot/',
    // assetsDomain: 'http://localhost/assets/',
    // socketDomain: "http://localhost/",



    name: 'ANP-IOT',
    siteName: 'IOT Platform',
    phone: '0218794',
    instagram: 'https://instagram.com/anp-co',
    email: 'info.iotsmile@gmail.com',
    facebook: '',
}

const siteTheme = {


    logo: '/images/logo-t.png',
    logo_s: '/images/logo-t.png',
    // invertLogo: true,


    themeColors: { headerBack: '#f2f7f8', headerFont: '#000000' },
    // themeColors: { headerBack: '#46196f', headerFont: '#ffffff' },
    // themeColors: { headerBack: '#000000', headerFont: '#ffffff' },



    backgroundColors: { normal: '#e2e8ea', plus: '#ee5050', luxury: '#101010', custom: '#d3b564' },
    colors: { normal: '#202020', plus: '#fff', luxury: '#fff', custom: '#101010' },
}

const languagesInfo = {
    en: {
        shortName: 'en',
        direction: 'ltr',
        name: 'English',
        icon: '/assets/images/english.svg'
    },
    fa: {
        shortName: 'fa',
        direction: 'rtl',
        name: 'فارسی',
        icon: '/assets/images/persian.svg'
    },

    // fr: {
    //     shortName: 'fa',
    //     direction: 'rtl',
    //     name: 'فارسی',
    //     icon: '/images/persian.svg'
    // }
}


let apisList = {


    getCurrencies: { route: 'content/getCurrencies', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getCurrency: { route: 'content/getCurrency', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    // USER
    postUserIndicator: { route: 'users/signup/postUserIndicator', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    signupActicationCode: { route: 'users/signup/postActicationCode', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "code", type: 'number', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    signinActicationCode: { route: 'users/signin/postActicationCode', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "code", type: 'number', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    postUserInfo: { route: 'users/signup/postUserInfo', server: 'yc', hashMethod: '', flexibleParams: true, params: [{ key: "userIndicator", type: 'string', required: true }, { key: "code", type: 'number', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    postForgotPassword: { route: 'users/signup/postForgotPassword', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    postPassword: { route: 'users/signup/postPassword', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "code", type: 'number', required: true }, { key: "password", type: 'string', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    postNewPassword: { route: 'users/signup/postNewPassword', server: 'yc', hashMethod: '', params: [{ key: "userIndicator", type: 'string', required: true }, { key: "code", type: 'number', required: true }, { key: "password", type: 'string', required: true }, { key: "indicatorType", type: 'string', required: true }] },
    getUserInfo: { route: 'users/getUserInfo', server: 'yc', hashMethod: '', auth: 'token', params: [] },
    getOneUser: { route: 'users/getOneUser', server: 'yc', hashMethod: '', auth: 'token', params: [{ key: "id", type: 'string', required: true }] },
    updateUserInfo: { route: 'users/updateUserInfo', server: 'yc', hashMethod: '', flexibleParams: true, auth: 'token', params: [{ key: "name", type: 'string', required: true }, { key: "name", type: 'family', required: true }] },
    updateUserPassword: { route: 'users/updateUserPassword', server: 'yc', hashMethod: '', flexibleParams: true, auth: 'token', params: [{ key: "currentPassword", type: 'string', required: true }, { key: "newPassword", type: 'string', required: true }] },
    getInbox: { route: 'users/getInbox', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    seenInbox: { route: 'users/seenInbox', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getUsers: { route: 'users/getUsers', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removeUser: { route: 'users/removeUser', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    updateUser: { route: 'users/updateUser', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getAdmins: { route: 'users/getAdmins', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    updateAdmin: { route: 'users/updateAdmin', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removeAdmin: { route: 'users/removeAdmin', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getPayments: { route: 'payments/getPayments', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    updatePayment: { route: 'payments/updatePayment', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removePayment: { route: 'payments/removePayment', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    ignoreData: { route: 'payments/ignoreData', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    increaseBalance: { route: 'payments/increaseBalance', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    usersExport: { route: 'users/usersExport', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },


    //Values
    getValuesWithData: { route: 'values/getValuesWithData', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    postValue: { route: 'values/postValue', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removeValue: { route: 'values/removeValue', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getOneValue: { route: 'values/getOneValue', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getMyPayments: { route: 'payments/getMyPayments', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },


    //// Content
    getContents: { route: 'content/getContents', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getOneContent: { route: 'content/getOneContent', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    postContent: { route: 'content/postContent', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removeContent: { route: 'content/removeContent', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },

    //blogs
    getBlogs: { route: 'blogs/getBlogs', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    // postBlog: { route: 'blogs/postBlog', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    removeBlog: { route: 'blogs/removeBlog', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getOneBlog: { route: 'blogs/getOneBlog', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getRecommendedBlogs: { route: 'blogs/getRecommendedBlogs', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    searchBlogs: { route: 'blogs/searchBlogs', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getSpecialBlogs: { route: 'blogs/getSpecialBlogs', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },


    // Shop
    // getProducts: { route: 'shop/getProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    // getOneProduct: { route: 'shop/getOneBlog', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    // getRecommendedProducts: { route: 'shop/getRecommendedProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    searchProducts: { route: 'shop/searchProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getSpecialProducts: { route: 'shop/getSpecialProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },

    getProducts: { route: 'shop/getProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getProduct: { route: 'shop/getProduct', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },

    getRecommendedProducts: { route: 'shop/getRecommendedProducts', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
    getDocsSummary: { route: 'documentation/getDocsSummary', server: 'yc', hashMethod: '', params: [], auth: 'token', flexibleParams: true },
}


export { siteConfig, siteTheme, languagesInfo, apisList }