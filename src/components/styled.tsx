import { disableMotion, applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';

disableMotion(true);

// apply a color mode
applyMode(Mode.Dark);
applyMode(Mode.Light);

// apply a content density mode
applyDensity(Density.Compact);
applyDensity(Density.Comfortable);
