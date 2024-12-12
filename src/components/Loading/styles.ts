import styled from "styled-components/native";
import { Variants } from "../../theme/variants.interface";

export const StyledLoading = styled.ActivityIndicator.attrs<{ variant: Variants["loading"] }>(({ theme, variant }) => ({ color: theme.loadingVariantAssemblyLine.rootStyles(variant) }))``;
