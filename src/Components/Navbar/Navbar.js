import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand " style={{
                        fontfamily: 'Myriad Pro Regular',
                        marginLeft: '8%',
                        color: "#4a54f1",
                    }} href="/">

                        Blog Post
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;