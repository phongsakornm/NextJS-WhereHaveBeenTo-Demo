import Header from './Header'
import Footer from './Footer'
import Container from "@material-ui/core/Container"

const Layout = (props) => (
    <div>
        <Header />
        <Container className="container-layout">
            {props.children}
        </Container>
        <Footer />
        <style jsx global>{`
            /* For sx: 320px - 599px */
            @media only screen and (min-width: 320px) {
                .container-layout {
                    margin-top: 20px;
                }

                .sg-textNameInbox{
                    width: 100%;
                    padding-right: unset
                }

                .sg-textEmailInbox{
                    width: 100%;
                }
            }

            /* For sm: 600px - 959px */
            @media only screen and (min-width: 600px) {
                .container-layout {
                    margin-top: 20px;
                }

                .sg-textNameInbox{
                    width: 100%;
                    padding-right: 2%;
                }

                .sg-textEmailInbox{
                    width: 100%;
                }
            }

            /* For md: 960px - 1279px */
            @media only screen and (min-width: 960px) {
                .container-layout {
                    margin-top: 20px;
                    padding-left: 60px;
                    padding-right: 60px;
                }
            }

            /* For lg: 1280px - 1919px */
            @media only screen and (min-width: 1280px) {
                .container-layout {
                    margin-top: 20px;
                    padding-left: 100px;
                    padding-right: 100px;
                }
            }

            /* For xl: 1920px -> */
            @media only screen and (min-width: 1920px) {
                .container-layout {
                    margin-top: 20px;
                    padding-left: 140px;
                    padding-right: 140px;
                }
            }
      `}</style>
    </div>
)

export default Layout