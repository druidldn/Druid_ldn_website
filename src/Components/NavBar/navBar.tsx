import { Link } from 'react-router-dom';
import { StyledHeader } from './narBar.styles';


type NavLink = {
  to: string;
  label: string;
};

type NarBarProps = {
  links: NavLink[];
};


export default function NarBar({ links }: NarBarProps) {
  return (
    <StyledHeader>
      <nav>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </StyledHeader>
  );
}
