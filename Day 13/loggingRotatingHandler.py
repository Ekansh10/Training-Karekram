import logging
from logging.handlers import RotatingFileHandler
logging.basicConfig(level=logging.INFO)

logger = logging.getLogger("My logger")
logger.setLevel(logging.INFO) # Here we will not record levels below INFO level. But Info and above levels will be recorded


# Remove all existing handlers
if logger.hasHandlers():
    logger.handlers.clear()

# Logging levels: NOTEST(0)/DEBUG(10)/INFO(20)/WARNING(30)/ERROR(40)/CRITICAL(50)
handler = RotatingFileHandler("app.log", maxBytes=200, backupCount=3) # after 200 bytes of file fulled. The file will be app.log will be renamed to app.log.1 and then new logs will be stored in app.log file
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s')
handler.setFormatter(formatter)
logger.addHandler(handler)


logger.info("App Started")