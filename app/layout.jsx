import '@styles/global.css'
import Provider from '@components/Provider' 
import Nav from '@components/Nav'


export const metadata = {
    title: "Promptu",
    description: "An inbuilt prompt for research"
}

const RootLayout = ({children}) => {
    return ( 
        <html lang= "en" >
            <body >
                <div className="main">
                        <div className="gradient"/>
                </div>
                <main className='px-6'>
                <Nav />
                    {children}
                </main>
            </body>

        </html>
        
     );
}
 
export default RootLayout;