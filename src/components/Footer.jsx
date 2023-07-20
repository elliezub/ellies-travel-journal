import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/elliezub" target="_blank"><AiOutlineTwitter className="socialicon"/></a>
            <a href="https://www.linkedin.com/in/elliezubrowski/" target="_blank"><AiFillLinkedin className="socialicon"/></a>
            <a href="https://github.com/elliezub" target="_blank"><AiFillGithub className="socialicon"/></a>
        </footer>
    )
}