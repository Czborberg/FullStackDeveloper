const Notification = (parts) => {
    if (parts.message === null) {
      return null
    }

    const notifactiontype = parts.color + 'notification'
    console.log('notifactiontype', parts);
  
    return (
      <div className={notifactiontype}>
        {parts.message}
      </div>
    )
  }

  export default Notification