from cryptapi import CryptAPIHelper
myAddress='0xD97B5d963d81012FD9ef6A55Fd4fDe3eCACaBF6E'
ca = CryptAPIHelper("eth", myAddress, callbackUrl, {"orderId": 1234}, cryptapiParams)

address = ca.get_address()['address_in']
print(address)