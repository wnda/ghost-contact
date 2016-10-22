frontendRoutes = function frontendRoutes(middleware) {
    // ... 
    // Default
    router.get('*', frontend.single);
    
    router.post( '/your-desired-route/', frontend.submitContactForm );
    
    return router;
};
