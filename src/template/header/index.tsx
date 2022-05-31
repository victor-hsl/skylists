import styled from "styled-components";
import ThemeSwitcher from "../../components/themeSwitcher";

const Head = styled.header`
    height: 50px;
    padding: 0 30px;
    color: ${props => props.theme.text};
`;

type Props = {
    toggleTheme() : void;
}
const Header = ({toggleTheme} : Props) => {
    return (
        <Head className="d-flex align-items-center">
            <ThemeSwitcher toggleTheme={toggleTheme}/>
        </Head>
    )
}

export default Header;