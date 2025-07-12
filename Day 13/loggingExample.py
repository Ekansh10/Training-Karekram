import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger("My logger")
logger.setLevel(logging.INFO) # Here we will not record levels below INFO level. But Info and above levels will be recorded



# Logging levels: NOTEST(0)/DEBUG(10)/INFO(20)/WARNING(30)/ERROR(40)/CRITICAL(50)
stream_handler = logging.StreamHandler()
dev_file_handler = logging.FileHandler("app_dev.log")
test_file_handler = logging.FileHandler("app_test.log")

logger.addHandler(stream_handler)
logger.addHandler(dev_file_handler)
logger.addHandler(test_file_handler)

logger.info("App Started")
logger.debug("This is debug message")
logger.warning("This is warning")
