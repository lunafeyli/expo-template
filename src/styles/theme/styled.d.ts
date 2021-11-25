// import original module declarations
import "styled-components";
import { ThemeTypes } from ".";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme extends ThemeTypes {}
}
