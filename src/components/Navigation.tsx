import StaggeredMenu from './StaggeredMenu'
import type { StaggeredMenuItem } from './StaggeredMenu'

const menuItems: StaggeredMenuItem[] = [
  { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
  { label: 'Projects', ariaLabel: 'Go to projects section', link: '#projects' },
  { label: 'Studio', ariaLabel: 'Go to studio section', link: '#studio' },
  { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' },
]

export default function Navigation() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#1e1e22', '#35353c']}
        accentColor="#5227ff"
        isFixed={false}
        className="hero-nav"
      />
    </div>
  )
}

