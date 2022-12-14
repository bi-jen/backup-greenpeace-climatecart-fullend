import styled from 'styled-components';
import { imgUrl } from '../../utils/imgUrlWrapper';
import { respondTo } from '../../utils/responsive';

const VolunteerBanner = ({ image, children, alt, ...props }) => {
    return (
        <StyledContainer {...props}>
            <p>{ children }</p>
            <img src={imgUrl(image)} alt={alt}/>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    min-height: 200px;
    background: var(--white-100);
    border-radius: 5px;
    margin: 60px 0;
    padding: 16px 0;

    position: relative;

    display: flex;
    align-items: center;
    padding-left: 40px;

    ${respondTo.lg} {
        padding-left: 20px;
    }

    p {
        margin: 0;
        width: 55%;

        ${respondTo.lg} {
            font-size: 14px;
            line-height: 24px;
        }
    }

    img {
        height: 100%;
        object-fit: cover;
        position: absolute;
        border-radius: 0;
        right: 0;
        top: 0;
        margin: 0 auto;

        clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%);

        ${respondTo.lg} {
            width: 38%;
        }

        ${respondTo.sm} {
            object-position: -50px;
        }

        ${respondTo.xs} {
            object-position: -70px;
        }
    }
`;

export default VolunteerBanner;