import React from 'react';
import { Card, Avatar, Info, Name, Title, Description } from './teamCard.styles';

interface TeamCardProps {
  image: string;
  name: string;
  title: string;
  description?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  title,
  description,
}) => {
  return (
    <Card>
      <Avatar src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Title>{title}</Title>
        {description && 
          <Description>{description}</Description>
        }
      </Info>
    </Card>
  );
};

export default TeamCard;