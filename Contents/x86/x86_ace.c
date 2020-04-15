#include <stdio.h>

void vuln() {
	char text[500];
	printf("Enter some text: ");
	gets(text);
	printf("You typed : %s\n", text);
}

int main() {
	vuln();
}
