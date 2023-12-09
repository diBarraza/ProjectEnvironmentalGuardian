import Sidebar from '../app/side_bar/side_bar';
import MyComponent from '../app/component/MyComponent'
import React from 'react';
export default function Page() {
    return(
        <div>
            <Sidebar />
            <main>
                <MyComponent></MyComponent>
                <p>About</p>
            </main>
            
        </div>
    )
}