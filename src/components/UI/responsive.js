export const screen400px = `
  @media screen and (max-width: 400px){
    font-size: .7rem;

    h1{
      font-size: .9rem;
    }

    div .main__card__title{
      padding: 0;
      margin: 3rem 0 3rem 2rem;
    }

    div .main__card__title h1{
      font-size: 1.5rem;
    }

    .pokemon__type--double--container div p,
    .pokemon__type--container div p{
      font-size: .9rem;
    }

    table tbody tr td{
      font-size: .9rem;
    }

    .pokemon__group p{
      font-size: 3rem;
    }

    p{
      font-size: .8rem;
    }
  }
`

export const screen800px = `
  @media screen and (max-width: 800px){
    font-size: .9rem;

    h1{
      font-size: 1rem;
    }

    div .main__card__title{
      padding: 0;
      margin: 3.5rem 0 3.5rem 2.5rem;
    }

    div .main__card__title h1{
      font-size: 1.8rem;
    }

    .pokemon__type--double--container div p,
    .pokemon__type--container div p{
      font-size: 1rem;
    }

    table tbody tr td{
      font-size: 1rem;
    }

    .pokemon__group p{
      font-size: 1rem;
    }

    p{
      font-size: .9rem;
    }
  }
`
