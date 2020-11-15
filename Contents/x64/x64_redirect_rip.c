#include <stdio.h>

void call_me() {
	printf("\n[+]	Code execution redirected. You win\n");
}

void vuln() {
	char buf[100];
	printf("Enter something: ");
	gets(buf);
	printf("You typed : %s\n", buf);
}

int main() {
	vuln();
}
