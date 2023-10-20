// import { AuthRouter } from '@/routes/utils/routers'
// import React, { Suspense } from "react";
import Router from "@/routes/index";


function App() {
    return (
        // <Suspense fallback={<div />} >
        <div style={{ height: `${100}%` }}>
            {/* <AuthRouter> */}
                <Router />
            {/* </AuthRouter> */}
        </div>
        // </Suspense>
    );
}

export default App;

