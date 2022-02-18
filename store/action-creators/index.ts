import * as AboutThunks from "./about/about.thunks"
import * as HeaderThunks from "./header/header.thunks"
import * as HomepageThunks from "./homepage/homepage.thunks"
import * as PortfolioThunks from "./portfolio/portfolio.thunks"

export default {
    ...AboutThunks,
    ...HeaderThunks,
    ...HomepageThunks,
    ...PortfolioThunks
}
