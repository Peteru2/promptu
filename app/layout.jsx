import '@styles/global.css'

export const metadata = {
    title: "Promptu",
    description: "An inbuilt prompt for research"
}

const Layout = ({children}) => {
    return ( 
        <html lang= "en">
            <body>
                <div className="main">
                        <div className="gradient"/>
                </div>
                <main>
                    {children}
                </main>
            </body>
        </html>
        
     );
}
 
export default Layout;