import * as AboutThunks from "./about/about.thunks"
import * as ContactThunks from "./contact/contact.thunks"
import * as HeaderThunks from "./header/header.thunks"
import * as HomepageThunks from "./homepage/homepage.thunks"
import * as PortfolioThunks from "./portfolio/portfolio.thunks"

export default {
    ...AboutThunks,
    ...ContactThunks,
    ...HeaderThunks,
    ...HomepageThunks,
    ...PortfolioThunks
}
