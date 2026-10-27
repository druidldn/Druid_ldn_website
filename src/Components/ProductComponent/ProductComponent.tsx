import { useEffect, useState } from 'react';
import {
  StyledCard, StyledTitle, StyledDetails, StyledDimensions, StyledCost,
  BottomRow, RowImg,
  LightboxOverlay, LightboxImg, CloseBtn,
} from './ProductComponent.styles';


type Item = {
  id: number;
  company: any;
  details?: string;
  dimensions?: string;
  cost?: string;
  content?: any;
};

type ProductComponentProps = {
  items: Item[];
};



export default function ProductComponent({ items }: ProductComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState<string>('image');

  const open = (src: string, alt?: string) => {
    setActiveSrc(src);
    setActiveAlt(alt || 'image');
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setActiveSrc(null);
  };

  // (optional) ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
      <div>
        {items.map((item: any) => {
          const hasdetails = !!item.dimensions;

          // normalize your item.content to [{src, alt}]
          const images = Array.isArray(item.content)
            ? item.content
                .filter(Boolean)
                .map((img: any) =>
                  typeof img === 'string'
                    ? { src: img, alt: item.company }
                    : { src: img.src ?? img.url, alt: img.alt || item.company }
                )
                .filter((x: any) => !!x.src)
                .slice(0, 3)
            : [];

          return (
            <StyledCard key={item.id} hasdetails={hasdetails}>
              <StyledTitle> <img alt={item.company} src={item.company} /></StyledTitle>
              <StyledDetails>{item.details}</StyledDetails>
              {item.dimensions && (
                <>
                  <StyledDimensions>Dimensions: {item.dimensions}</StyledDimensions>
                  <StyledCost>Cost: {item.cost}</StyledCost>
                </>
              )}

              {images.length > 0 && (
                <BottomRow>
                  {images.map((img: any, i: any) => (
                    <RowImg
                      key={i}
                      src={img.src}
                      alt={img.alt || `${item.company} ${i + 1}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => open(img.src, img.alt)}
                      onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                        if (e.key === 'Enter' || e.key === ' ') open(img.src, img.alt);
                      }}
                    />
                  ))}
                </BottomRow>
              )}
            </StyledCard>
          );
        })}
      </div>

      {isOpen && activeSrc && (
        <LightboxOverlay onClick={close} role="dialog" aria-modal="true">
          <div onClick={(e) => e.stopPropagation()}>
            <LightboxImg src={activeSrc} alt={activeAlt} />
          </div>
          <CloseBtn aria-label="Close" onClick={close}>×</CloseBtn>
        </LightboxOverlay>
      )}
    </>
  );
}
