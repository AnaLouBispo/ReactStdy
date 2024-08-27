const Header = () =>{

    const headerSty = {
        backgroundColor:'pink',
        padding:'20px',
        textAlign:'center',
        borderBottom:'5px solid palevioletred',
        borderRadius:'5px',
    }

    const title = {
        margin:0,
        fontSize:'24px',
        color:'palevioletred'
    }

    return(
        <header style={headerSty}>
            <h1 style={title}>First System</h1>

        </header>
    )
}
export default Header;