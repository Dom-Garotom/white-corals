export const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scroll = (100 * scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    if (scroll > 25) {
      return true;
    } else {
      return false 
    }
  }