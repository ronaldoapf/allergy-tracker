import { Box, Container, styled } from '@mui/material'

export const HeroContainer = styled('div')`
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;

  img {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 600px;
    }
  }
`
export const HeroBox = styled(Box)`
  gap: 20px;
  display: flex;
  flex-direction: column;

  .application-title {
    font-weight: 700;
    line-height: 1.25;
    font-size: 2.5rem;
    text-align: center;
  }

  .application-description {
    color: #637381;
    font-size: 1rem;
    max-width: 600px;
    line-height: 1.5;
    font-weight: 400;
    text-align: center;

    span {
      color: #fa541c;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 600px) {
    .application-title,
    .application-description {
      text-align: left;
    }
  }
`
