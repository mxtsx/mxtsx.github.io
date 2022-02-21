import * as AboutThunks from "./about/about.thunks"
import * as HomepageThunks from "./homepage/homepage.thunks"
import * as PortfolioThunks from "./portfolio/portfolio.thunks"

export default {
    ...AboutThunks,
    ...HomepageThunks,
    ...PortfolioThunks
}
