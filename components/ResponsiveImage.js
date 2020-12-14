const ResponsiveImage = ({image, sizes, pictureClass, imgClass, handleClick}) => {
  if (image && image.url) {
    const imageUrl = new URL(image.url)
    const imagePath = imageUrl.origin + imageUrl.pathname + '?auto=compress,format&'

    return (
      <picture className={pictureClass} onClick={() => { if (handleClick) { handleClick() } }}>
        {sizes && sizes.mobile &&
          <source media="(max-width: 639px)" srcSet={imagePath + sizes.mobile} />
        }
        {sizes && sizes.sm &&
          <source media="(max-width: 767px)" srcSet={imagePath + sizes.sm} />
        }
        {sizes && sizes.md &&
          <source media="(max-width: 1023px)" srcSet={imagePath + sizes.md} />
        }
        {sizes && sizes.lg &&
          <source media="(max-width: 1279px)" srcSet={imagePath + sizes.lg} />
        }
        {sizes && sizes.xl &&
          <source media="(max-width: 1535px)" srcSet={imagePath + sizes.xl} />
        }
        {sizes && sizes.full ? (
          <source srcSet={imagePath + sizes.full} />
        ) : (
          <source srcSet={image.url} />
        )}
        {sizes && sizes.full ? (
          <img className={imgClass} src={imagePath + sizes.full} alt={image.alt} />
        ) : (
          <img className={imgClass} src={image.url} alt={image.alt} />
        )}
      </picture>
    )
  }

  return null
}

export default ResponsiveImage
