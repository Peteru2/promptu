import '@styles/global.css'
const Layout = ({children}) => {
    return ( 
        <html>
            <body>
                <div>

                </div>

                <main>
                    {children}
                </main>
            </body>
        </html>
        
     );
}
 
export default Layout;