import { Button} from '@mui/material';
import {
  ListStyled,
  ItemList,
  Photo,
  Info,
  Name,
  Description

} from './List.style';

import { Pet } from '../../../data/@types/Pet';

import { TextService} from '../../../data/services/TextServices'

interface ListPrpos{
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListPrpos){

  const sizeMaxText = 200;

  return(
    <ListStyled>
      {props.pets.map(pet => (
        <ItemList key={pet.id}>
          <Photo src= {pet.photo} alt={pet.name} />
          <Info>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitedText(pet.description, sizeMaxText) }
            </Description>
            <Button
              variant={'contained'}
              fullWidth
              onClick={() => props.onSelect(pet)}
              >Adotar {pet.name}</Button>
          </Info>
        </ItemList>
      ))}
      

    </ListStyled>
  )
}